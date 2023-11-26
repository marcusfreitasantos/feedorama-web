import StoryTemplate from "../../templates/StoryTemplate";
import { getCategories } from "../../services/requests/categories";

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

  const categories = await getCategories(cookies.userToken);

  return {
    props: {
      cookies,
      categories,
    },
  };
}
