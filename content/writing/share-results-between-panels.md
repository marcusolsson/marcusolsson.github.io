---
title: "Learn Grafana: Share query results between panels to reduce load time"
date: 2020-10-14
publisher: Grafana Labs
icon: /images/grafana-icon.png
external_url: https://grafana.com/blog/2020/10/14/learn-grafana-share-query-results-between-panels-to-reduce-load-time/
---

As you add more panels to your dashboard, more requests are being made, potentially leading to your dashboard taking longer to load. While you can limit the data requested in each query, one of the best ways to reduce the loading time is to reduce the number of requests being made to the data source.
