<template>
  <div id="videogroup">
    <div id="videolist"></div>
  </div>
</template>
<script>
import moment from "moment-mini";
const parser = require("rss-parser");
const p = new parser();
export default {
  name: "VFeedYoutube",
  props: {
    ChannelId: {
      type: String,
      required: true
    }
  },

  mounted() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const ytbXmlUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    const self = this;
    if (this.ChannelId) {
      p.parseURL(`${CORS_PROXY}${ytbXmlUrl}${this.ChannelId}`, function(
        err,
        feed
      ) {
        if (err) throw err;
        self.listVideos(feed);
      });
    }
  },
  methods: {
    listVideos(data) {
      // var firstOutput = "";
      let entries = data.items;
      let myOutput = "<ul>";
      for (let i = 0; i < entries.length; i++) {
        let entriesID = entries[i].id.split(":")[2];
        let entriesTitle = entries[i].title;
        let author = entries[i].author;
        let publishedAt = moment().from(entries[i].pubDate, true);
        myOutput += `<li><div class="content"> <div class="thumbnail"><iframe class="thumbnail"  src="https://www.youtube.com/embed/${entriesID}"
         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        ></iframe></div>
        <div class="details"> <div class="metadata"><a class="entry-title"> ${entriesTitle} 
        </a><a class="author">${author}</a><span class="date">${publishedAt} ago</span> </div></div></div></li>`;
      }
      document.getElementById("videolist").innerHTML = myOutput;
      myOutput += "</ul>";
    }
  }
};
</script>
<style>
#videogroup {
  width: 100%;
}

#myplayer .first iframe {
  width: 100%;
  padding: 0;
}
#videolist {
  position: relative;
  width: 400px;
}
#videolist ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

#videolist li {
  display: block;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
}
#videolist li .content {
  display: flex;
  flex-direction: row;
  width: 100%;
}
#videolist li .content .thumbnail {
  position: relative;
  display: inline-block;
  flex: none;
  margin-right: 8px;
  height: 94px;
  width: 168px;
}
#videolist li .content .details {
  width: 100%;
  text-align: left;
}
#videolist li .content .metadata {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#videolist li .content .metadata .entry-title {
  display: inline-block;
  color: rgb(3, 3, 3);
  font-weight: bold;
  font-size: 0.8rem;
}
#videolist li .content .metadata .author {
  margin-top: 10px;
}
#videolist li .content .metadata .author,
#videolist li .content .metadata .date {
  color: rgb(96, 96, 96);
  font-size: 0.8rem;
}
</style>
