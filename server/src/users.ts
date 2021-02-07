import express from 'express'
import fs from 'fs'
import path from 'path'

export const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("USER: ", id)
  const profile = await getProfile(id)
  return res.json(profile);
});

router.get("/:id/:project", async (req, res) => {
  const { id, project} = req.params
  const profile = await getProfile(id, project)
  console.log("USER: ", id, " PROJECT:", project)
  return res.json(profile);
});

const getProfile = async (user: string, project: string = null) => {
  try {
    const buffer = await fs.readFileSync(path.join(__dirname, "../users", user, "profile.json"))
    const profile = JSON.parse(buffer.toString())
    console.log("project", project)
    if (project != null) {
      const md = await getProjectMarkdown(user, project);
      profile["Projects"].forEach(async proj => {
        if(proj["name"] == project) {
          proj["info"] = md;
        }
      })
    }
    profile["Projects"].forEach(async proj => {
      proj["gallery"] = await getGallery(user, proj["name"]);
    })
    profile["Avatar"] = await getAvatar(user)
    return profile
  } catch (err) {
    console.error(err);
    return {}
  }
}

const getAvatar = async (user: string) => {
  let image = ""
  try {
   fs.readdirSync(path.join(__dirname, "../assets")).forEach(async file => {
     if(file.startsWith(`${user}__`)) {
       image = file
       return
     }
   })
  } catch (err) {
    console.log(err)
  }
  return image;
}

const getGallery = async (user: string, project: string) => {
  let image = []
  try {
   fs.readdirSync(path.join(__dirname, "../assets")).forEach(async file => {
     if(file.startsWith(`${user}_${project}`)) {
       image.push(file)
     }
   })
  } catch (err) {
    console.log(err)
  }
  return image;
}

const getProjectMarkdown = async (user: string, project: string) => {
  const files = []
  const filepath = await path.join(__dirname, "../users", user, project);
  try {
    await fs.readdirSync(filepath).forEach(async file => {
      if (file.endsWith(".md")) {
        const title = file.match(/(.*)\.md/)
        console.log(file)
        console.log(title)
        if (title == null) {
          return
        }
        const body = await getMarkdownText(path.join(filepath, file));
        files.push({"title": title[1], "body": body})
      }
    })
  } catch (err) {
    console.error(err)
  }
  console.log(files)
  return files;
}

const getMarkdownText = async (filepath: string) => {
    const buffer = await fs.readFileSync(filepath)
    return buffer.toString()
}

const users = router;
export default users;