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
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import styles from "./PartnershipForm.module.css";

const partnershipSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name is required." }),
  contactPerson: z.string().min(2, { message: "Contact person is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type PartnershipFormValues = z.infer<typeof partnershipSchema>;

export const PartnershipForm = () => {
  const form = useForm({
    schema: partnershipSchema,
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: PartnershipFormValues) => {
    console.log("Partnership form submitted:", values);
    // Here you would typically call a mutation to an endpoint
    alert("Thank you for your interest in partnering with us! We will be in touch soon.");
    form.setValues({ organizationName: "", contactPerson: "", email: "", message: "" });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <FormItem name="organizationName">
          <FormLabel>Organization Name</FormLabel>
          <FormControl>
            <Input
              placeholder="e.g., Local School, Tech Corp"
              value={form.values.organizationName}
              onChange={(e) => form.setValues((p) => ({ ...p, organizationName: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name="contactPerson">
          <FormLabel>Contact Person</FormLabel>
          <FormControl>
            <Input
              placeholder="John Smith"
              value={form.values.contactPerson}
              onChange={(e) => form.setValues((p) => ({ ...p, contactPerson: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name="email">
          <FormLabel>Contact Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="john.smith@example.com"
              value={form.values.email}
              onChange={(e) => form.setValues((p) => ({ ...p, email: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name="message">
          <FormLabel>How would you like to partner?</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a bit about your organization and how you envision us working together..."
              rows={4}
              value={form.values.message}
              onChange={(e) => form.setValues((p) => ({ ...p, message: e.target.value }))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <Button type="submit" size="lg" className={styles.submitButton}>
          Send Inquiry
        </Button>
      </form>
    </Form>
  );
};