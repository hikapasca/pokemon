import { gql } from "@apollo/client";
export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_DETAIL_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
          url
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
      weight
      species {
        url
        name
      }
      game_indices {
        game_index
      }
      height
      location_area_encounters
      base_experience
      forms {
        url
        name
      }
      held_items {
        item {
          url
          name
        }
        version_details {
          rarity
          version {
            name
            url
          }
        }
      }
      order
    }
  }
`;
