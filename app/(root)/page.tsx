import React from "react";

import { CarouselPlugin } from "@/components/shared/CarouselPlugin";
import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getUserImages } from "@/lib/actions/image.actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";
// import { getAllImages } from "@/lib/actions/image.actions";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  // const searchQuery = (searchParams?.query as string) || "";
  // const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <CarouselPlugin />
      <section className='home'>
        <h1 className='home-heading'>Unleash your Creative Vision with Imagen</h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 5).map((link) => (
            <Link key={link.route} href={link.route} className='flex-center flex-col gap-2'>
              <li className='flex-center w-fit rounded-full bg-white p-4'>
                <Image src={link.icon} alt='image' width={24} height={24} />
              </li>
              <p className='p-14-medium text-center text-white'>{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
