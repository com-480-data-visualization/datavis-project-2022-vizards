# Milestone 2

Last Update: 06.05.2022

Check out our cool and partially interactive visualizations [here](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/).

## The Plan
To organize our project, we broke down our goal into subtasks to achieve it. These subtasks are

- *Quantitative Analysis*: Our data reveals interesting trends, such as the most successful artists or songs. But also how, for example, the popular genres have changed in the last 22 years. The ingredient is to take the mass of data and find interesting correlations and visualize them.
  
- *Qualitative Analysis*: Besides the beat, the lyrics are essential for songs. In this part we will look at song lyrics and other qualitative characteristics such as "danceability" or "energy".Haven't you always wondered whether it's easier to dance to Kanye's or Taylor's songs? Don't worry, we'll answer the question already in this milestone 😉. 
- Merge: TODO

In the following we will deal with the quantitative and qualitative analysis of the data set. The last component will be dealt with in the final milestone, as it is based on the other two analyses mentioned. These two analyses help to narrow down time periods and topics.

## Sketches of the visualizations

### Quantitative Analysis


**[Expandable tree](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/genre_tree.html)**

<img src="img/m2_tree.png" alt="drawing" width="400"/>

We would like to figure out the connections among genres, artists and songs. Hence we create an expandable tree that shows the main genres and the most popular artists for each genre. And then for each artist, their most recognised work are included. Further, we would like to connect each song to their lyrics, sentiment analysis result, year of publish, and the social events. Highcharts was used for creating it.



**[WordCloud Animation for Song Names](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/song_name_wordcloud.html)**

<img src="img/m2_wordcloud.png" alt="drawing" width="400"/>

Don't know how to pick a good name for your song? This wordCloud animation might inspire you! By looking at the animation, you will get an idea of how the most popular songs at 21st century are named, which might help you choose a good name for your own piece of music work. This animation is generated on top of D3.js template.


**[Trend of the Famous Musician](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/top_artists_linechart.html)**

<img src="img/m2_linechart.png" alt="drawing" width="400"/>

For the 10 highly ranked artists on Billboard, we generate a linechart to see how their popularity was changed over year. As we can see, although Taylor Swift is the musician with most work recognised over time, Drake on the other hand reached the highest ever number of songs on Billboard in 2018. 

**[Genres Popularity Bubble Chart](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/genres_bubbles.html)**

<img src="img/m2_bubbles.PNG" alt="drawing" width="400"/>

Music subgenres can be grouped into larger genre categories. The goal here was to visualize which are the most popular genres and how much each subgenre contributes to its corresponding category. 

We used Highcharts for the animated graph. A score has been assigned to each subgenre according to its number of occurrences and its rank in the Billboard in a linear fashion : the higher the subgenre occurrence rank, the higher the score. 


**[Top 100 Collaborative Artists Network](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/collaboration_network.html)**

<img src="img/m2_network.png" alt="drawing" width="400"/>

The Top 100 most collaborative artists are extracted and shown on a network graph with all the collaborations between them. 

## Qualitative Analysis

**[Sentiment and Subjectivity](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/sent_subj.html)**
<img src="img/m2_sentvssubj.jpg" alt="drawing" width="400"/>
We want to show how the music changed over years. A line chart which is showing the sentiment and subjectivity change is a intuitive way to show it. For the final version we want to explore the changes and link them to social events, which could have caused the change. The user should have the possibility to explore them interactively. 

**[Most common words](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/word_count.html)**
<img src="img/m2_wordoccurence.jpg" alt="drawing" width="400"/>
It is insightful to see how the most common words changed through the time. The lollipop is a simple way to display the ranking of the words, by adding the year slider it is possible to see the change over time and see interesting changes. For example HipHop become mainstream around 2016 by this time also the use of the "N word" increased. Based on this visualization we a parallel coordinates chart to show linkage between the words. 

**[How often a word occurred in the top 10 songs](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/heatmap.html)**
<img src="img/m2_heatmap.jpg" alt="drawing" width="400"/>
After we get insights over the most common words its also interesting, so see how the usage changes in the top 10 over the years. The heatmap show the mean of the usage of the selected word in all songs, which ranked the displayed rank. For example for rank 1 it's the mean of all chart hits in this year. Plus we display the song with most occurrences. We will add more words and a dropdown to select.

**[Song Insights](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/radar.html)**
<img src="img/m2_radar.jpg" alt="drawing" width="400"/>

With this visualization we find to compare the song of the artists against each other. The benefit here is that the user can compare multiple artists and see directly how they songs compare to each other. Right now we have only three artists and for the final version we want to give the user the possibility to decide the artists. Also we want to create such a visualization for the change over the years. *Go to the website and checkout if Kanye or Taylor are more danceable.*

## Tools and Lectures
We made use of the following tools:
- [d3.js]()
- [billboard.js]()

## MVP
Our website is something of a MVP. We want to create a simple not overloaded website to present our results. Of course all visualizations will be unified. 