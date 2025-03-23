-- AlterTable
ALTER TABLE "User" ALTER COLUMN "passwordChangedAt" DROP NOT NULL,
ALTER COLUMN "passwordResetToken" DROP NOT NULL,
ALTER COLUMN "passwordResetExpires" DROP NOT NULL;
