import { Component, createResource, Resource } from "solid-js";
import { Link, useParams, useRouteData } from "@solidjs/router";
import { LocationName } from "../utils";
import getMenu from "../api/menu";

const Location: Component = () => {
  const { id }: { id: LocationName } = useParams();

  const [data, { mutate, refetch }] = createResource(
    async () => await getMenu(id)
  );

  return (
    <>
      <div class="m-12 whitespace-pre-wrap overflow-hidden ">
        <Link class="block mb-6 font-bold underline" href="/">
          HOME
        </Link>
        {data.loading && <div>Loading...</div>}
        <code>{JSON.stringify(data(), null, 2)}</code>
      </div>
    </>
  );
};

export default Location;
