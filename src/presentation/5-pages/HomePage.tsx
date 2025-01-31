import { NextPage } from "next";

import prisma from "../../lib/prisma";
import BaseLayout from "../4-layouts/BaseLayout";

interface Props {
  //
}

const HomePage: NextPage<Props> = async () => {
  const posts = await prisma.post.findMany();
  return (
    <>
      <BaseLayout className="home">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col w-100 max-w-md space-y-3">
            <h1 className="font-serif text-3xl lg:text-4xl">
              Football - Prisma 
            </h1>
            {posts.map((post) => (
          <li key={post.id} className="mb-2">
            {post.title}
          </li>
        ))}
          </div>
          <div>
            
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default HomePage;
