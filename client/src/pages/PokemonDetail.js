import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DETAIL_POKEMON } from "../graphql/graphql";
import { useParams, Redirect } from "react-router-dom";
import Detail from "../component/Details";
import Loading from "../component/Loading";
export const PokemonDetail = () => {
  const param = useParams();
  const { error, loading, data } = useQuery(GET_DETAIL_POKEMON, {
    variables: { name: param.pokemon },
  });
  if (loading) return <Loading />;
  if (error) return <Redirect to="/" />;
  if (data)
    return (
      <div>
        {data && (
          <div>
            <Detail pokemon={data.pokemon} />
          </div>
        )}
      </div>
    );
};

export default PokemonDetail;
