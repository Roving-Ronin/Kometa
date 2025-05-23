---
hide:
  - toc
---
# Letterboxd Builders

You can find items using the lists on [Letterboxd.com](https://letterboxd.com/) (Letterboxd). 

| Builder                               | Description                              |             Works with Movies              |             Works with Shows             |    Works with Playlists and Custom Sort    |
|:--------------------------------------|:-----------------------------------------|:------------------------------------------:|:----------------------------------------:|:------------------------------------------:|
| [`letterboxd_list`](#letterboxd-list) | Finds every movie in the Letterboxd List | :fontawesome-solid-circle-check:{ .green } | :fontawesome-solid-circle-xmark:{ .red } | :fontawesome-solid-circle-check:{ .green } |

## Letterboxd List

Finds every movie in the Letterboxd list :material-information-outline:{ data-tooltip data-tooltip-id="tippy-yaml-lists" } or [Letterboxd Films Search](https://letterboxd.com/films/).

The expected input is a Letterboxd List URL or Letterboxd Film Search URL. Multiple values are supported as either a list :material-information-outline:{ data-tooltip data-tooltip-id="tippy-yaml-lists" } or a comma-separated string.

You can add different filters directly to this Builder.

| Filter Attribute                                                                                  | Description                                                                                                                                                                                                 |
|:--------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `limit`                                                                                           | **Description:** Max number of items per returned.<br>**Values:** number greater than `1`                                                                                                                  |
| `rating` :material-numeric-1-circle:{ data-tooltip data-tooltip-id="tippy-letterboxd-filters-1" } | **Description:** Search for the specified rating range. The rating is the list owner's rating not site wide rating.<br>**Values:** range of int i.e. `8-10` (convert Letterboxd stars to a 10 point scale) |
| `year` :material-numeric-1-circle:{ data-tooltip data-tooltip-id="tippy-letterboxd-filters-1" }   | **Description:** Search for the specified year range.<br>**Values:** range of int i.e. `1990-1999`                                                                                              |
| `note` :material-numeric-2-circle:{ data-tooltip data-tooltip-id="tippy-letterboxd-filters-2" }   | **Description:** Search for the specified value in the note. The note is the list owner's note not site wide note.<br>**Values:** Any String                                                     |

The `sync_mode: sync` and `collection_order: custom` Setting are recommended since the lists are continuously updated and in a specific order.

Using the `limit` filter attribute is recommended when using a Letterboxd Film Search as the number of results returned could be very large.

???+ tip "Details Builder"

    You can replace `letterboxd_list` with `letterboxd_list_details` if you would like to fetch and use the description from the list


### Example Letterboxd List Builder(s)

```yaml
collections:
  Vulture’s 101 Best Movie Endings:
    letterboxd_list: https://letterboxd.com/brianformo/list/vultures-101-best-movie-endings/
    collection_order: custom
    sync_mode: sync
```

* You can update the collection details with the Letterboxd List's description by using `letterboxd_list_details`.
  * You can specify multiple collections in `letterboxd_list_details` but it will only use the first one to update the collection summary.

```yaml
collections:
  Vulture’s 101 Best Movie Endings:
    letterboxd_list_details: https://letterboxd.com/brianformo/list/vultures-101-best-movie-endings/
    collection_order: custom
    sync_mode: sync
```

```yaml
collections:
  Vulture’s 101 Best Movie Endings From the 90s:
    letterboxd_list_details: 
      url: https://letterboxd.com/brianformo/list/vultures-101-best-movie-endings/
      year: 1990-1999
    collection_order: custom
    sync_mode: sync
```
