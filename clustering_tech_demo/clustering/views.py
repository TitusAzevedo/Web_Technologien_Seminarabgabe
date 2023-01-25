from django.shortcuts import render
from django.http import HttpResponse

# ---- KMeans ----

import pandas as pd
import matplotlib.pyplot as plt

import numpy as np
import random

from sklearn.preprocessing import StandardScaler 
from sklearn.cluster import KMeans
# ---- KMeans end ----


# ---- Plotly ----

import plotly
import plotly.express as px
from plotly.offline import plot

# ---- Plotly end ----


# dataframe mit Produktinformationen (geeignet für: alter, preis, anlass)
from dotenv import load_dotenv
import os

load_dotenv()
df = os.getenv("product_dataframe")


scaler = StandardScaler()
df[['age_T','price_T', 'event_T']] = scaler.fit_transform(df[['age', 'price', 'event']])



# führe kmean aus mit entsprechend vielen Clustern, wie oben festgestellt
kmeans = KMeans(n_clusters=6)

# Model training, keine Ahnung was genau passiert
kmeans.fit(df[['age_T', 'price_T', 'event_T']])

# im DF eine neue spalte hinzufügen, kmean labels hinzufügen, danach wird später gefärbt
df['kmeans_6'] = kmeans.labels_


# ---- KMeans end ----



# Erstelle einen Plotly Offline Plot und speicher ihn als test_plot.html Datei. Danach wird mittels Jinja2 die test_plot.html Datei innerhalb der show_model.html Datei gerendert
def index(request):
    fig = plot(px.scatter_3d(df, x='age', y='price', z='event', color='kmeans_6', height=900), config= {'displaylogo': False} ,auto_open=False, filename='clustering/templates/clustering/test_plot.html')
    return render(request, 'clustering/show_model.html', context={'graph': 'test_plot.html'})

