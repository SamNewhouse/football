import { NextPage } from "next";
import { prisma } from "../../lib/prisma";
import Url from "../1-atoms/Url";
import BaseLayout from "../4-layouts/BaseLayout";

interface Props {
  //
}

const PostPage: NextPage<Props> = async () => {
  return (
    <>
      <BaseLayout className="post">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col w-100 max-w-md space-y-3">
            <h1 className="font-serif text-6xl lg:text-8xl">
              {post?.id}
            </h1>
            <h2 className="font-sans text-xl lg:text-2xl">by Sam Newhouse</h2>
            <div className="flex flex-row space-x-2">
              <Url href="https://www.npmjs.com/package/create-nttb" className="text-md lg:text-lg">
                <span>nmpjs</span>
              </Url>
              <Url href="https://github.com/SamNewhouse/create-nttb" className="text-md lg:text-lg">
                <span>github</span>
              </Url>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default PostPage;
