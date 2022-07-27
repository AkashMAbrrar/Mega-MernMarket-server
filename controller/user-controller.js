import User from '../model/user-schema.js';



export const userSignup = async (req, res) => {

    try {

        const exits = await User.findOne({ username: req.body.username });
        if (exits) {
            return res.status(401).json({ message: 'Username already exits' });
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: user })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}