import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
    private userModel: typeof User;

    constructor() {
        this.userModel = User;
    }

    async register(username: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({ username, password: hashedPassword });
        return newUser.save();
    }

    async login(username: string, password: string) {
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
    }

    async getUserById(id: string) {
        return this.userModel.findById(id);
    }
}