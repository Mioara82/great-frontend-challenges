"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { type Challenge, ChallengeSchema } from "./schemas";

const ChallengeForm = () => {
  const { register, handleSubmit } = useForm<Challenge>({
    resolver: zodResolver(ChallengeSchema),
  });

  const onSubmit = (data: Challenge) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>Create a New Challenge</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="title" required>
            Title
          </Label>
          <Input id="title" {...register("title")} placeholder="E.g. Color Picker" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="description" required>
            Description
          </Label>
            <Input id="description" {...register("description")} placeholder="Short summary" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="date">
            Start Date
          </Label>
          <Input id="date" {...register("date")} type="date" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="level" required>
            Level
          </Label>
          <Input id="level" {...register("level")} placeholder="starter | mid-level | senior" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="status" required>
            Status
          </Label>
          <Input id="status" {...register("status")} placeholder="not-started" />
        </div>
        <Button type="submit" variant="default">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChallengeForm;
