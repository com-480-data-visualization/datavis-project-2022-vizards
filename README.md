# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Aamir Shakir | xxx |
| Fatih M | xxx |
| Yiren Cao | 343208 |


## Milestone 1 

In 21st century, it seems like everything changes fast. We want to know whether it reflects to the music industry. By diving into the big data, we would like to understand how music change over time and the reasons behind. 

To begin with, we look into artist-related events and social events.

### Dataset

#### Billboard Chart Top 100
Our dataset `charts_added.csv` downloaded from Kaggle, it gives the hottest 100 songs from the magazine Billboard every week from 2000.1.1. to 2022.1.1. The dataset has 114900 instances and 8 variables, 3 categorical variables `song`, `artist`, `date`, 4 numerical variables `rank`, `last.week`, `peak.rank` and `weeks.on.board`.

Metadata:

- song: song title
- artist: name of artist
- date: date of chart
- rank: rank of the song according to sales etc. in US.
- last.week: rank in previous week
- peak.rank: top rank achieved by the song
- weeks.on.board: number of weeks the song has been on board

The dataset from Kaggle has high quality since it origins from Billboard megazine. However, to analyse the music from 2000 to 2022, we find that the data from 06.11.2021 to 31.12.2021 are missing, and so we add the missing entries by using the Python API billboard.py to retreive the music charts from Billboard.com.

#### Genius

#### Wikipedia

#### Spotify API



### Problematic

- How does the taste of music (mainstream genre) change over time?
- How does the trend of music relate to the development of film industry?
- How the important social events in 21st century (e.g. #MeToo) influence the music industry?
- How does the lyrics evolve over years?

We would like to achieve dynamic and connective visualisation for different songs, artists and events. 

### Exploratory Data Analysis

The dataset has 9316 distinct songs. The most popular song during the period is Blinding Lights, performed by The Weeknd, which stayed on Billboard for 90 weeks. 

The dataset contains 4238 distinct artists and the 3 most popular artists in this timeframe are Taylor Swift, Drake and Kanye West with 136, 104 and 51 songs on board respectively.

Here is a list of preliminary questions we would like to answer in EDA:

1. Who are the most popular artists in 21st century?
2. What are the most popular songs in 21st century?
3. What are the most frequent words in the name of the songs?

**Python notebooks:**

- Detailed Billboard exploration: [preprocessing.ipynb](https://github.com/com-480-data-visualization/datavis-project-2022-vizards/blob/main/preprocessing.ipynb)


### Related work

