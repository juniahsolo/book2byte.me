import React from "react";
import * as z from "zod";
import {
  useForm,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import styles from "./VolunteerForm.module.css";

const volunteerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interest: z.string().min(1, { message: "Please select an area of interest." }),
});

type VolunteerFormValues = z.infer<typeof volunteerSchema>;

export const VolunteerForm = () => {
  const form = useForm({
    schema: volunteerSchema,
    defaultValues: {
      name: "",
      email: "",
      interest: "",
    },
  });

  const onSubmit = (values: VolunteerFormValues) => {
    console.log("Volunteer form submitted:", values);
    // Here you would typically call a mutation to an endpoint
    alert("Thank you for your interest! We will be in touch soon.");
    form.setValues({ name: "", email: "", interest: "" });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <FormItem name="name">
          <FormLabel>Full Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Jane Doe"
              value={form.values.name}
              onChange={(e) => form.setValues((p) => ({ ...p, name: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name="email">
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="jane.doe@example.com"
              value={form.values.email}
              onChange={(e) => form.setValues((p) => ({ ...p, email: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name="interest">
          <FormLabel>Area of Interest</FormLabel>
          <Select
            value={form.values.interest}
            onValueChange={(value) => {
              form.setValues((p) => ({ ...p, interest: value }));
              // Manually trigger validation on change for select
              setTimeout(() => form.validateField("interest"), 0);
            }}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select an area" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="book-distribution">Book Distribution</SelectItem>
              <SelectItem value="webinar-support">Webinar Support</SelectItem>
              <SelectItem value="tech-support">Tech Support (Future)</SelectItem>
              <SelectItem value="general">General Support</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>

        <Button type="submit" size="lg" className={styles.submitButton}>
          Submit Application
        </Button>
      </form>
    </Form>
  );
};