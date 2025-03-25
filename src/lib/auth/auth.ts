import { sendEmail } from "@/infrastructure/sendEmail";
import prisma from "@/lib/prisma/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";

const MJ_TEMPLATE_ID_LOGIN = 6839639;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // Implement the sendVerificationOTP method to send the OTP to the user's email address
        console.log("sendVerificationOTP", { email, otp, type });
        await sendEmail({
          To: [{ Email: email }],
          Variables: {
            code: otp,
          },
          TemplateID: MJ_TEMPLATE_ID_LOGIN,
        });
      },
    }),
    // nextCookies(),
  ],
});
