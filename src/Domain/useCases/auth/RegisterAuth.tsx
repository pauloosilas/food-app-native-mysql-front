import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRespository";
import { User } from "../../entities/User";

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: User) => {
    return await register(user)
}