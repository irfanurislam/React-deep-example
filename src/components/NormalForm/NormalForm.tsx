import { FieldValues, useForm } from "react-hook-form";
import Cn from "../../utils/Cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={Cn("border border-red-500 max-w-md p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={Cn(
          "border border-yellow-500 grid grid-cols-1 justify-items-center gap-5",
          { "md:grid-cols-2": double }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md focus:border-border-purple-500 focus:ring-purple-500"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">{errors?.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">{errors?.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Passowrd
          </label>
          <input
            className="w-full"
            type="text"
            id="password"
            {...register("password")}
          />
          {errors?.password && (
            <span className="text-red-500">{errors?.password.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Passowrd
          </label>
          <select name="" id="">
            <option value="">one</option>
            <option value="">two </option>
            <option value="">three</option>
            <option value="">four</option>
          </select>
        </div>
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            text area
          </label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div> */}
        {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            text area
          </label>
          <input
            type="checkbox"
            className="border border-gray-500 rounded-md checked:bg-purple-400 hover:bg-purple-400 focus:bg-purple-400 "
          />
        </div> */}
      </div>
      <div
        className={Cn("grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": double,
        })}
      >
        <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit" type="submit">
            submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
