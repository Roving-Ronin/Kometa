## Overlays

These files apply overlays and can generally be used on both Movie and Show library-types, and often works at the season and episode-level too.

In the scenario where there is missing data such as age ratings for episodes, then generally the highest-level data 
available will be applied at the lower level (i.e. a Show's Common Sense age rating would apply to all episodes).

These overlays are applied by calling the below paths into the `overlay_files` [section](../../../config/files) of your config.yml

=== "Awards/Charts"

    | Default                         | Path     | Example Overlays                     | Allowed Media       |
    |:--------------------------------|:---------|:-------------------------------------|:--------------------|
    | [Ribbon](../../overlays/ribbon) | `ribbon` | IMDb Top 250 Ribbon, RT Fresh Ribbon | `Movies`<br>`Shows` |

=== "Content"

    | Default                                     | Path           | Example Overlays                                 | Allowed Media                     |
    |:--------------------------------------------|:---------------|:-------------------------------------------------|:----------------------------------|
    | [Episode Info](../../overlays/episode_info) | `episode_info` | "S01E01", "S02E09"                               | `Episodes`                        |
    | [Mediastinger](../../overlays/mediastinger) | `mediastinger` | Mediastinger Logo for After/During Credit Scenes | `Movies`<br>`Shows`               |
    | [Ratings](../../overlays/ratings) :material-numeric-1-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-1" }        | `ratings`      | IMDb Audience Rating, Metacritic Critic Rating   | `Movies`<br>`Shows`<br>`Episodes` |
    | [Status](../../overlays/status)             | `status`       | Airing, Returning, Canceled, Ended               | `Shows`                           |

=== "Content Ratings"

    | Default                                                              | Path                      | Example Overlays                                      | Allowed Media                                  |
    |:---------------------------------------------------------------------|:--------------------------|:------------------------------------------------------|:-----------------------------------------------|
    | [US Content Ratings (Movie)](../../overlays/content_rating_us_movie) | `content_rating_us_movie` | G, PG, PG-13, R, NC-17, NR                            | `Movies`                                       |
    | [US Content Ratings (Show)](../../overlays/content_rating_us_show)   | `content_rating_us_show`  | TV-G, TV-Y, TV-PG, TV-14, TV-MA, NR                   | `Shows`<br>`Seasons`<br>`Episodes`             |
    | [UK Content Ratings](../../overlays/content_rating_uk)               | `content_rating_uk`       | U, PG, 12, 12a, 15, 18, R18, NR                       | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |
    | [DE Content Ratings](../../overlays/content_rating_de)               | `content_rating_de`       | 0, 6, 12, 16, 18, BPjM, NR                            | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |
    | [AU Content Ratings](../../overlays/content_rating_au)               | `content_rating_au`       | G, PG, M, MA15+, R18+, X18+, NR                       | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |
    | [NZ Content Ratings](../../overlays/content_rating_nz)               | `content_rating_nz`       | G, PG, M, R13, RP13, R15, R16, RP16, R18, RP18, R, NR | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |
    | [Common Sense Age Rating](../../overlays/commonsense)                | `commonsense`             | 1+, 2+, 3+, 4+, ..., 17+, 18+, NR                     | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |

=== "Media"

    | Default                                                        | Path             | Example Overlays                                                          | Allowed Media                                        |
    |:---------------------------------------------------------------|:-----------------|:--------------------------------------------------------------------------|:-----------------------------------------------------|
    | [Aspect Ratio](../../overlays/aspect) | `aspect`         | "1.33","1.78"                                                             | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes`       |
    | [Audio Codec](../../overlays/audio_codec):material-numeric-2-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-2" }                   | `audio_codec`    | Dolby Atmos logo, DTS logo                                                | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes`       |
    | [Audio/Subtitle Language Count](../../overlays/language_count) | `language_count` | Dual-Audio, Multi-Audio, Dual-Subtitle, Multi-Subtitle                    | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes`       |
    | [Audio/Subtitle Language Flags](../../overlays/languages)      | `languages`      | Flags Based on the Audio/Subtitles a file has                             | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes`       |
    | [Resolution/Editions](../../overlays/resolution) :material-numeric-3-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-3" } | `resolution`     | 4K Dolby Vision logo, 720P logo, "Director's Cut", "Criterion Collection" | `Movies`<br>`Shows`<br>`Episodes`                    |
    | [Runtimes](../../overlays/runtimes)                            | `runtimes`       | "Runtime: 1h 30m"                                                         | `Movies`<br>`Shows`<br>`Episodes`                    |
    | [Versions](../../overlays/versions)                            | `versions`       | Multiple Versions logo                                                    | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes`       |
    | [Video Format](../../overlays/video_format) :material-numeric-4-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-4" } | `video_format`   | "REMUX", "HDTV"                                                           | `Movies`<br>`Shows` :material-numeric-5-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-5" }<br>`Seasons` :material-numeric-5-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-5" }<br>`Episodes` |

=== "Production"

    | Default                               | Path        | Example Overlays                                | Allowed Media                                  |
    |:--------------------------------------|:------------|:------------------------------------------------|:-----------------------------------------------|
    | [Network](../../overlays/network)     | `network`   | "ABC", "CBS"                                    | `Shows`<br>`Seasons`<br>`Episodes`             |
    | [Streaming](../../overlays/streaming) | `streaming` | Netflix logo, Hulu logo                         | `Movies`<br>`Shows`                            |
    | [Studio](../../overlays/studio)       | `studio`    | "Warner Bros. Pictures", "Amblin Entertainment" | `Movies`<br>`Shows`<br>`Seasons`<br>`Episodes` |

=== "Utility"
    
    | Default                                   | Path          | Example Overlays   | Allowed Media                                        |
    |:------------------------------------------|:--------------|:-------------------|:-----------------------------------------------------|
    | [Direct Play](../../overlays/direct_play) | `direct_play` | "Direct Play Only" | `Movies`<br>`Shows` :material-numeric-5-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-5" }<br>`Seasons` :material-numeric-5-circle:{ data-tooltip data-tooltip-id="tippy-overlay-list-5" }<br>`Episodes` |
