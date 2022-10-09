import * as fs from 'fs'

export const gallery = async (req, res) => {
    try {
        let imgs = await fs.promises.readdir('public/img')
        res.status(200).json(imgs)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export default gallery