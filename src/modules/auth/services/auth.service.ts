import bcrypt from "bcryptjs";

import { AuthRepository }
from "../repositories/auth.repository";

export class AuthService {
  constructor(
    private authRepository =
      new AuthRepository()
  ) {}

  async registerBuyer(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10
      );

    return this.authRepository.createBuyer({
      ...data,
      password: hashedPassword,
    });
  }

  async registerSeller(data: any) {
    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10
      );

    return this.authRepository.createSeller({
      ...data,
      password: hashedPassword,
    });
  }
}