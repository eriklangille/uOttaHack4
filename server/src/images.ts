import fs from 'fs'
import path from 'path'

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

const LoadImages = async (directory, assets) => {
  const files = await getFiles(directory)
  files.forEach((file : string) => {
    if (/\.(png|jpe?g|svg)$/.test(file)) {
      console.log(file)
      const info = file.match(/.*users[\/\\]([a-zA-Z0-9_.-]*)[\/\\]([a-zA-Z0-9_.-]*)$/)
      const moreinfo = file.match(/.*users[\/\\]([a-zA-Z0-9_.-]*)[\/\\]([a-zA-Z0-9_.-]*)[\/\\]([a-zA-Z0-9_.-]*)$/)
      let filepath = "";

      if (moreinfo != null) {
          filepath = path.join(assets, `${moreinfo[1]}_${moreinfo[2]}_${moreinfo[3]}`)
      } else {
          filepath = path.join(assets, `${info[1]}__${info[2]}`)
      }

      fs.exists(filepath, (exist) => {
        if (exist) {
          fs.stat(filepath, (err, stats) => {
            fs.stat(file, (err, stats2) => {
              if (stats2.mtime > stats.mtime) {
                console.log("File updated ", stats.mtime, " ", stats2.mtime)
                fs.copyFile(file, filepath, (err) => {
                  console.error(err)
                })
              }
            })
          })
        } else {
          console.log("file copy ", filepath)
          fs.copyFile(file, filepath, (err) => {
            console.error(err)
          })
        }
      })
    }
  })
}

export default LoadImages