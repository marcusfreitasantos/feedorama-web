import { getStoryById } from "../../services/requests/stories";
import { getCategories } from "../../services/requests/categories";
import StoryTemplate from "../../templates/StoryTemplate";
import nookies from "nookies";

export default function Stories(props) {
  return <StoryTemplate {...props} />;
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  if (!cookies.userToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const pageTitle = "Stories";
  const story = await getStoryById(
    context.params.slug,
    cookies.userToken.toString()
  );
  const categories = await getCategories(cookies.userToken);

  return {
    props: {
      story,
      pageTitle,
      cookies,
      categories,
    },
  };
}
