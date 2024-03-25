import React from "react";
import { Link } from "react-router-dom";

import { Label } from "@components/common/label";
import { Input } from "@components/common/input";
import { Textarea } from "@components/common/textarea";
import { Box, Section } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import { Avatar, AvatarImage } from "@components/common/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import { FaSquareInstagram, FaLinkedin, FaGithub } from '@/icons'

import { User } from '@/types/main'

const Account: React.FC<{ children?: React.ReactNode, user: User }> = ({ children, user }) => {
    return (
        <Section className="grid grid-rows-1 md:grid-cols-2 gap-5">
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-2 bg-custom-light">
                    <Avatar className="aspect-square w-40 h-40 mb-2 ring-4 ring-custom-border">
                        <AvatarImage
                            src={user.profileImg}
                            alt="avatar"
                        />
                    </Avatar>
                    <CardTitle className="text-sm font-medium">
                        <Typography
                            variant="h3"
                            className="font-bold"
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            className="font-bold text-xs text-center"
                        >
                            {user.email}
                        </Typography>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col pt-2 pb-2 mb-0">
                    <Box className="self-center flex flex-row justify-between items-center gap-4">
                        <Link to={user.instagram}>
                            <FaSquareInstagram className="text-3xl text-rt-normal-pink-1100 text-custom-primary" />
                        </Link>
                        <Link to={user.twitter}>
                            <FaLinkedin className="text-3xl text-rt-normal-blue-1100 text-custom-primary" />
                        </Link>
                        <Link to={user.github}>
                            <FaGithub className="text-3xl text-rt-normal-slate-1200 text-custom-primary" />
                        </Link>
                    </Box>
                </CardContent>
            </Card>
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-2 pl-3">
                    <CardTitle className="text-sm font-medium pt-0">
                        <Typography
                            variant="h3"
                            className="border-b-0 max-md:text-2xl"
                        >
                            Information
                        </Typography>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-2 [&>*]:font-sans">
                        <Box className="flex flex-row gap-4 justify-around items-center">
                            <Box className="flex-1">
                                <Label className="text-base">
                                    Username
                                </Label>
                                <Input
                                    type="text"
                                    disabled
                                    value={user.username}
                                    className="ring-1 ring-custom-border"
                                />
                            </Box>
                            <Box className="flex-1 invisible">
                                <Label className="text-base">
                                    Username
                                </Label>
                                <Input
                                    type="text"
                                    disabled
                                    value={user.username}
                                    className="ring-1 ring-custom-border"
                                />
                            </Box>
                        </Box>

                        <Box className="flex flex-row gap-4 justify-around items-center">
                            <Box className="flex-1">
                                <Label className="text-base">
                                    First Name
                                </Label>
                                <Input
                                    type="text"
                                    disabled
                                    value={
                                        user.name.split(" ")[0]
                                    }
                                    className="ring-1 ring-custom-border"
                                />
                            </Box>
                            <Box className="flex-1">
                                <Label className="text-base">
                                    Second Name
                                </Label>
                                <Input
                                    type="text"
                                    disabled
                                    value={
                                        user.name.split(" ")[1]
                                    }
                                    className="ring-1 ring-custom-border"
                                />
                            </Box>
                        </Box>

                        <Box className="flex flex-col">
                            <Label className="text-base">
                                Bio
                            </Label>
                            <Textarea
                                value={user.bio}
                                disabled
                                className="ring-1 ring-custom-border resize-none"
                            />
                        </Box>
                    </form>
                </CardContent>
            </Card>
            {children}
        </Section>
    )
}

export default Account;