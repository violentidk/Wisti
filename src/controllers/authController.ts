import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const user = await this.authService.login(username, password);
            if (user) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred during login', error });
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const newUser = await this.authService.register(username, password);
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred during registration', error });
        }
    }
}

export default new AuthController();