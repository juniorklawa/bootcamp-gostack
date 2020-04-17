import { Request, Response } from "express";
import createUser from "./services/CreateUser";
export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "everaldo@gmail.com",
    password: "123",
    techs: [
      "NodeJS",
      "ReactJS",
      "React Native",
      {
        title: "Java",
        xp: 100,
      },
    ],
  });
  return response.json({ user });
}
