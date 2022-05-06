# Milestone 2

Last Update: 06.05.2022

Check out our fantastic and partially interactive visualizations [here](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/).

## The Plan
To organize our project, we broke down our goal into subtasks to achieve it. These subtasks are

- *Ranking, Genre, and Artists*: Our data reveals interesting trends, such as the most successful artists or songs. But also how, for example, the popular genres have changed in the last 22 years. The ingredient is taking the mass of data, finding exciting correlations, and visualizing them. In this part, we delve into the existing dataset and analyze the relationship between the main variables (genre, artists and songs) and the collaboration network.
  
- *Lyrics and Further Insights*: The lyrics are essential for songs besides the beat. This part will look at song lyrics and other qualitative characteristics such as "danceability" or "energy". Haven't you always wondered whether it's easier to dance to Kanye's or Taylor's songs? Don't worry, and we'll answer the question in this milestone 😉. 

- *Social Context*: As stated, we want to analyze the change in the music with the link to social changes and events. We want to merge the other two parts with the social and historical events in this step.

In the following, we will deal with the quantitative and qualitative analysis of the data set. Based on the other two analyses mentioned above, the last component will be dealt with in the final milestone. These two analyses help limit downtime periods and topics to solve the final part.

## Sketches of the visualizations
We are giving here some ideas on how we plan to implement them. In the following, you will find our initial visualizations and a brief explanation of how we want to use them in the final product. We will focus on the first two parts of the plan, and the last one will be implemented in the final milestone.

### Ranking, Genre and Artists
This analysis focus on the chart data and artists.

**[Expandable tree](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/genre_tree.html)**

<img src="img/m2_tree.png" alt="drawing" width="400"/>

We want to figure out the connections among genres, artists and songs. Hence we create an expandable tree that shows the main genres and the most famous artists for each genre. And then, for each artist, their most recognized work is included. Further, we would like to connect each song to its lyrics, sentiment analysis result, year of publication, and social events.

**[WordCloud Animation for Song Names](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/song_name_wordcloud.html)**

<img src="img/m2_wordcloud.png" alt="drawing" width="400"/>

Don't know how to pick a good name for your song? This word cloud animation might inspire you! By looking at the animation, you will get an idea of how the most popular songs in the 21st century are named, which might help you choose a good name for your piece of music work.


**[Trend of the Famous Musician](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/top_artists_linechart.html)**

<img src="img/m2_linechart.png" alt="drawing" width="400"/>

For the 10 highly ranked artists on Billboard, we generate a line chart to see how their popularity was changed over the year. As we can see, although Taylor Swift is the musician with the most work recognized over time, Drake, on the other hand, reached the highest ever number of songs on Billboard in 2018. 

**[Genres Popularity Bubble Chart](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/genres_bubbles.html)**

<img src="img/m2_bubbles.PNG" alt="drawing" width="400"/>

Music subgenres can be grouped into more significant genre categories. The goal here was to visualize the most popular genres and how much each subgenre contributes to its corresponding category. 

We used Highcharts for the animated graph. A score has been assigned to each subgenre according to its number of occurrences and its rank on Billboard linearly: the higher the subgenre occurrence rank, the higher the score. 


**[Top 100 Collaborative Artists Network](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/charts/collaboration_network.html)**

<img src="img/m2_network.png" alt="drawing" width="400"/>

The Top 100 most collaborative artists are extracted and shown on a network graph with all the collaborations between them. 

It would be interesting to draw a conclusion on how much artists from a particular genre are collaborative between them or with artists from a different genre by assigning a different color to each artist according to the genre. This will be a goal for the next milestone. 

### Lyrics and Further Insights

This part will examine the lyrics and some other valuable entities of the songs.

**[Sentiment and Subjectivity](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/sent_subj.html)**

<img src="img/m2_sentvssubj.jpg" alt="drawing" width="400"/>

We want to show how music has changed over the years. We want to explore the changes and link them to social events that could have caused the change for the final version. The user should have the possibility to analyze them interactively. A line chart showing the sentiment and subjectivity change is an intuitive way to show it. 

**[Most common words](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/word_count.html)**

<img src="img/m2_wordoccurence.jpg" alt="drawing" width="400"/>

It is insightful to see how the most common words have changed over time. The lollipop is a simple way to display the ranking of the terms; by adding the year slider, it is possible to see the change over time and see interesting changes. For example, hip-hop became mainstream around 2016. By this time, the use of the "N-word" had also increased. Based on this visualization, we used a parallel coordinates chart to show the linkage between the words. 

**[How often a word occurred in the top 10 songs](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/heatmap.html)**

<img src="img/m2_heatmap.jpg" alt="drawing" width="400"/>

After we get insights into the most common words, it's also interesting to see how the usage changes in the top 10 over the years. The heatmap shows the mean of the usage of the selected word in all songs, which ranked the displayed rank. For example, rank 1 is the mean of all chart hits this year. Plus, we show the song with the most occurrences. We will add more words and a dropdown to select.

**[Song Insights](https://com-480-data-visualization.github.io/datavis-project-2022-vizards/lyrics/radar.html)**

<img src="img/m2_radar.jpg" alt="drawing" width="400"/>

With this visualization, we compare the artists' songs against each other. The benefit here is that the user can compare multiple artists and see directly how their songs compare to each other. Right now, we have only three artists, and for the final version, we want to give the user the possibility to decide on the artists. Also, we want to create such a visualization for the change over the years. *Go to the website and check if Kanye or Taylor are more danceable.*

## Tools and Lectures
We made use of the following tools:
- [D3.js](https://d3js.org/):
    - D3.js was used for the line chart for Sentiment and Subjectivity, the lollipop chart for the Most Common Words, and the heatmap of how often a word occurred in the top 10.
    - Use D3.js official template on observablehq.com for creating a collapsible tree for genre, artists and their work.
- [billboard.js](https://naver.github.io/billboard.js/):
    - We used billboard.js to create the radar chart for the Song Insights Chart
- [Highcharts](https://www.highcharts.com/)
    - We use highcharts templates to create line chart for top artists and the bubble chart for top genres
- [vis.js](https://visjs.org/)
    - We used this tool for the Top 100 Collaborative Artists Network
- [Basscss](https://basscss.com/)
    - We used it to create our webpage.

Those Lectures and Exercises were helpful to solve our problems:
- D3.js from Lecture 4, 5 and Exercise 4, 5
- Sketching technique from Lecture 7
- Text analysis such as WordCloud from Lecture 9

## MVP
Our website is something of an MVP. We want to create a simple, not overloaded website to present our results. Of course, all visualizations will be unified. 
