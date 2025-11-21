import apiClient from "./apiClient";
import type { User } from "@/types/User";

class UserService {
  async getUserById(id: number | string): Promise<User> {
    const { data } = await apiClient.get<User>(`/api/users/${id}`);
    return data;
  }
}

export const userService = new UserService();
export default UserService;
