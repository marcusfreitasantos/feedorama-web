import { getStories } from "../../services/requests/stories";
import { getCategories } from "../../services/requests/categories";
import DefaultTemplate from "../../templates/DefaultTemplate";
import nookies from "nookies";

export default function Stories(props) {
  return <DefaultTemplate {...props} />;
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
  const content = await getStories(cookies.userToken.toString());
  const categories = await getCategories(cookies.userToken);

  return {
    props: {
      content,
      pageTitle,
      cookies,
      categories,
    },
  };
}
