
'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { updateUser } from '@/utils/profile/settings'


export default function UserSettings() {
    const userData = useSelector((state: any) => state.authUser);
    const queryClient = useQueryClient();

    const [fullname, setFullname] = useState(userData.username);
    const [username, setUsername] = useState(userData.username);
    const [coalition, setCoalition] = useState("bios");
    const [isTwoFactor, setIsTwoFactor] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleFileChange = (e: any) => {
        const file: File | null = e.target.files ? e.target.files[0] : null;
        setAvatar(file);
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setAvatarPreview(previewURL);
        } else {
            setAvatarPreview(null);
        }
    };



    const updateUserMutation = useMutation(
        async () => {
            const formData = new FormData();
            formData.append("fullname", fullname);
            formData.append("username", username);
            formData.append("coalition", coalition);
            formData.append("isTwoFactor", String(isTwoFactor));
            if (avatar) {
                formData.append("avatar", avatar);
            }

            const response = await updateUser(formData);

            return response;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("userData");
            },
        }
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateUserMutation.mutate();
    };

    return (
        <div className="py-12 text-black">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
 
                        <div className="flex justify-center">
                            {avatarPreview !== null && (
                                <img
                                    src={avatarPreview}
                                    alt="Avatar Preview"
                                    className="mt-2 rounded-full w-20 h-20 inline-block"
                                />
                            )}
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Profile Avatar
                            </label>
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                onChange={handleFileChange}
                                className="border border-gray-300"
                                // accept="image/*" // Allow only image files
                            />
                            <p className="text-red-500 text-xs mt-2">
                                Error here.
                            </p>
                        </div>

                        <div>
								<label
									htmlFor="fullname"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Full Name
								</label>
								<input
									type="text"
									name="fullname"
									id="fullname"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
									required
								/>
                                <p className="text-red-500 text-xs mt-2">
                                    Error here.
                                </p>
							</div>

							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
									required
								/>
                                <p className="text-red-500 text-xs mt-2">
                                    Error here.
                                </p>
							</div>

							<div>
								<label
									htmlFor="coalitions"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Choose Coalitions
								</label>
								<select
									name="coalitions"
									id="coalitions"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={coalition}
                                    onChange={(e) => setCoalition(e.target.value)}
								>
                                    <option value="bios">Bios</option>
                                    <option value="pandora">pandora</option>
                                    <option value="freax">freax</option>
                                    <option value="commodore">commodore</option>
                                </select>
                                <p className="text-red-500 text-xs mt-2">
                                    Error here.
                                </p>
							</div>

							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="twofactor"
										aria-describedby="twofactor"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"

                                        checked={isTwoFactor}
                                        onChange={(e) => setIsTwoFactor(e.target.checked)}
									/>
                                    <label htmlFor="twofactor" className="ml-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Two Factor Authentication
                                    </label>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="twofactor"
										className="font-light text-gray-500 dark:text-gray-300"
									>
										Two Factor Authintication
									</label>
								</div>
							</div>


                            <button
                                type="submit"
                                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update Information
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
 
}




