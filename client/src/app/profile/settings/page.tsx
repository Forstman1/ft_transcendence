"use client";
import { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { updateUser } from "@/utils/functions/profile/settings";
import TwoFactor from "@/components/elements/QRCodeModal/QRCodeModal";
import { useToast } from "@chakra-ui/react";
import RestrictedRoute from "@/components/RestrictedRoute";
import { Avatar } from "@chakra-ui/react"
import { useRouter } from "next/navigation";

import { z } from "zod";

const schema = z.object({
	fullname: z
		.string()
		.min(4, { message: "Must be 5 or more characters long" })
		.max(30, { message: "Must be 5 or fewer characters long" }),
	username: z.string().min(4).max(20),
	coalition: z.string().optional(),
});

export default function UserSettings() {
	const userData = useSelector((state: any) => state.authUser);
	const queryClient = useQueryClient();
    const router = useRouter();

	const [fullname, setFullname] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [coalition, setCoalition] = useState<string>("");
	const [avatar, setAvatar] = useState<File | null>(null);
	const [avatarPreview, setAvatarPreview] = useState<string>("");
	const toast = useToast();

	const [formErrors, setFormErrors] = useState({
		fullname: "",
		username: "",
		coalition: "",
		avatar: "",
	});

	useEffect(() => {
		if (userData) {
			setFullname(userData?.fullname || "");
			setUsername(userData?.username || "");
			setCoalition(userData?.coalitionName || "");
			setAvatarPreview(userData?.avatarUrl || "");
		}
	}, [userData]);

	const handleFileChange = (e: any) => {
		const file: File | null = e.target.files ? e.target.files[0] : null;
		if (file) {
			const validFileType = [
				"image/jpeg",
				"image/jpg",
				"image/png",
				"image/gif",
			].includes(file.type);
			const validFileSize = file?.size <= 5 * 1024 * 1024; // 5MB (adjust as needed)
			if (validFileType && validFileSize) {
				setFormErrors((prevState) => ({
					...prevState,
					avatar: "",
				}));
				setAvatar(file);
				const previewURL = URL.createObjectURL(file);
				setAvatarPreview(previewURL);
			} else {
				setFormErrors((prevState) => ({
					...prevState,
					avatar: "Invalid file type or size",
				}));
				setAvatarPreview("");
			}
		}
	};

	const updateUserMutation = useMutation(
		async () => {
			const formData = new FormData();
			formData.append("fullname", fullname);
			formData.append("username", username);
			formData.append("coalition", coalition);
			const temp: any = {
				fullname: fullname,
				username: username,
				coalition: coalition,
			};
			if (avatar) {
				formData.append("avatar", avatar);
			}

			const result = schema.safeParse(temp);

			if (result.success) {
				setFormErrors({
					fullname: "",
					username: "",
					coalition: "",
					avatar: "",
				});
				const Response = await updateUser(formData);
				formData.delete;
				return Response.data;
			} else {
				const formatedErrors = result.error.format();

				setFormErrors((prevState) => ({
					...prevState,
					fullname: `${
						formatedErrors.fullname?._errors.join(", ") || ""
					}`,
				}));

				setFormErrors((prevState) => ({
					...prevState,
					username: `${
						formatedErrors.username?._errors.join(", ") || ""
					}`,
				}));

				setFormErrors((prevState) => ({
					...prevState,
					coalition: `${
						formatedErrors.coalition?._errors.join(", ") || ""
					}`,
				}));

				return null;
			}
		},
		{
			onSuccess: () => {
				toast({
					title: "Success!",
					description: "Your profile has been updated",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				queryClient.invalidateQueries("userData");
			},
			onError: (error: any) => {
				toast({
					title: "Error!",
					description: error?.response?.data?.message,
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			},
		}
	);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		updateUserMutation.mutate();
	};

	return (
		<RestrictedRoute>
			<div className="py-12 text-black">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="custom-shadow w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-6">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<div className="flex justify-center">
								{avatarPreview !== null && (
                                    <Avatar
                                        className="border-solid border-2 border-gray-900 custom-shadow"
                                        size="xl"
                                        name={userData.fullname}
                                        src={avatarPreview}
                                    />
								)}
							</div>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}
							>
								<div>
									<label
										htmlFor="avatar"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Profile Avatar
									</label>
									<input
										type="file"
										name="avatar"
										id="avatar"
										className="custom-shadow cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										onChange={handleFileChange}
										accept="image/*"
									/>
									<p className="text-red-500 text-xs mt-2">
										{formErrors.avatar}
									</p>
								</div>

								<div>
									<label
										htmlFor="fullname"
										className="block mb-2 text-sm font-medium text-gray-900"
									>
										Full Name
									</label>
									<input
										type="text"
										name="fullname"
										id="fullname"
										className="custom-shadow bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={fullname}
										onChange={(e) =>
											setFullname(e.target.value)
										}
										required
									/>

									<p className="text-red-500 text-xs mt-2">
										{formErrors.fullname}
									</p>
								</div>

								<div>
									<label
										htmlFor="username"
										className="block mb-2 text-sm font-medium text-gray-900"
									>
										Username
									</label>
									<input
										type="text"
										name="username"
										id="username"
										className="custom-shadow bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
										required
									/>
									<p className="text-red-500 text-xs mt-2">
										{formErrors.username}
									</p>
								</div>

								<div>
									<label
										htmlFor="coalitions"
										className="block mb-2 text-sm font-medium text-gray-900"
									>
										Choose Coalitions
									</label>
									<select
										name="coalitions"
										id="coalitions"
										className="custom-shadow bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										value={coalition}
										onChange={(e) =>
											setCoalition(e.target.value)
										}
									>
										<option value="Factionless">Factionless</option>
										<option value="Bios">Bios</option>
										<option value="Pandora">Pandora</option>
										<option value="Freax">Freax</option>
										<option value="Commodore">Commodore</option>
									</select>
									<p className="text-red-500 text-xs mt-2">
										{formErrors.coalition}
									</p>
								</div>
								<button
									type="submit"
									className="custom-shadow w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
								>
									Update Information
								</button>
							</form>
						</div>
					</div>

					<div className="custom-shadow w-full bg-white rounded-sm shadow md:mt-0 sm:max-w-md px-9 py-2">
						<h2 className="font-bold mb-3">
							Also for security reasons it&apos;s preferred to activate
							2FA
						</h2>
						<TwoFactor />
					</div>
                    <div className="flex justify-end w-full bg-white rounded-sm mt-4 sm:max-w-md py-2">
                        <button className=" bg-blue-500 text-white py-2 px-4 rounded-md custom-shadow" onClick={() => {router.push('/')}}>Skip</button>
                    </div>
				</div>
			</div>
		</RestrictedRoute>
	);
}
