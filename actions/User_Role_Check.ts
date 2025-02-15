import { auth } from "@/lib/auth"
import { headers } from "next/headers"
 import { Role } from "@prisma/client" // Import the Role enum
import prisma from "@/lib/db";

const User_Role_Check = async () => {
    "use server";
    
    try {
        // Get the session
        const session = await auth.api.getSession({
            headers: await headers()
        });

        // Check if we have a session
        if (!session || !session.user) {
            return {
                success: false,
                error: "Not authenticated"
            };
        }

        // Extract user details from session
        const { email, id } = session.user;

        // Get user from database using Prisma with exact schema fields
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                emailVerified: true,
                image: true,
                createdAt: true,
                updatedAt: true,
                twoFactorEnabled: true
            }
        });

        if (!user) {
            return {
                success: false,
                error: "User not found in database"
            };
        }

        // Return user information with admin check based on Role enum
        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                isAdmin: user.role === Role.ADMIN,
                emailVerified: user.emailVerified,
                image: user.image,
                twoFactorEnabled: user.twoFactorEnabled
            }
        };

    } catch (error) {
        console.error('Authentication error:', error);
        return {
            success: false,
            error: "Authentication failed"
        };
    }
};

export default User_Role_Check;