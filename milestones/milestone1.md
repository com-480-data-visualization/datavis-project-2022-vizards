# Milestone 1 (08.04.2022)

Last update: 08.04.2022

## Dataset 
For our project we used multiple datasets or created them on our own. They will be explained in the following.

- Billboard "The Hot 100" Songs: This dataset is from [kaggle](https://www.kaggle.com/datasets/dhruvildave/billboard-the-hot-100-songs) and is a collection of "The Hot 100" charts released since its inception in 1958 until 06.11.2021. The dataset is already preprocessed and ready to use (Usability score on kaggle 10/10). We added the missing weeks until 01.01.2022, since we need those weeks for later analysis. We will use the data from the year 2000 on, for this we removed the data before that year.

-  Lyrics: We did not found a comprehensive lyrics dataset which contains the most of the lyrics of the Billboard dataset. We used the [Genius API](https://docs.genius.com/) to create the dataset on our own. If there the lyrics is not find by the API, we are ignoring it for now. We will add them manually during the project by using sources such as [LyricFind](https://www.lyricfind.com/). 

- Genre: TODO

- Google Trends: TODO

## Problematic

Music is present everywhere, and probably you are listening to it now. It is a part of our culture and society. By this connection, how are musical trends related to major social events? By analyzing the chart trends and popular songs of the past 22 years, we want to explore if there is a significant change in trending music linked or correlated to social movements, for example, on Google Trends or trending Twitter hashtags. The project aims to investigate whether there is a correlation or connection between social trends or changes and successful songs.

To achieve this goal, we will examine the lyrics of the top songs in depth using NLP and visualize the most recurring themes by genre or year.

In the end, we want to create an interactive website that gives an overview of the music and time history of the last 22 years. The user should be able to click through the years and get an overview of social developments and also about musically successful songs. We let the user play with interactive visualizations to make comparisons, adjust charts and get different perspectives on the topic. We will use our time data to create linked charts where you can zoom in and filter to gain a deeper insight and a better feel for the data.

## Exploratory Data Analysis

Please find our EDA in the following the link to the notebooks and some intersting findings. 

1. [Billboard dataset]()
- from 2000 - 2021 there were 9316 distinct songs in the charts 
- the most popular song during the period is Blinding Lights, performed by The Weeknd, which stayed on Billboard for 90 weeks. 
- the dataset contains 4238 distinct artists 
the 3 most popular artists in this timeframe are Taylor Swift (136 songs), Drake (104 songs) and Kanye West (51 songs)

2. [Lyrics dataset]()
- Most frequent lyrics language after english (7840 titles) is spanish (144 titles)
- Song title length
    - longest: "My City Of Ruins (Benefiting Artists For Peace And Justice Haiti Relief) [Live From The Kennedy Center Honors]" by Eddie Vedder
    - shortest: "8" by Billie Eilish
- most common word is "I" (132068 occurrences) 
- songs are more negative (7823 songs) then positive (5542 songs)

3. [Genre dataset]()

4. [Trends dataset]()


## Related work

We got great inspiration, for visualization and implementation from following projects.

-  [Textual analysis of popular country music](https://www.johnwmillr.com/trucks-and-beer/): A project to analyze country music in depth and find more not so obvious correlation between the artist and lyrics. For example which artist mentions trucks most often in there songs. Also it is a nice resource about story telling with data.

-  [49 Years of Lyrics: Why So Angry?](https://towardsdatascience.com/49-years-of-lyrics-why-so-angry-1adf0a3fa2b4): Here the lyrics from 1970 - 2018 are exemined in a sentimental analysis. It gives us useful hints about text processing and sentiment analysis.

- [Step by Step to Visualize Music Genres with Spotify API](https://towardsdatascience.com/step-by-step-to-visualize-music-genres-with-spotify-api-ce6c273fb827): Music genres are visualized using the [Spotify API](https://developer.spotify.com/documentation/web-api/). For us it is a nice resource for the visualizations and for the usage of the Spotify API-

The original thing about our project is that we want to identify trends without focusing on one artist or genre and also put this analysis in a socio-social context if one exists.