import { BookmarkOutlined, BookOutlined, ExploreOutlined, GamesOutlined, GroupOutlined,SubscriptionsOutlined, StreamOutlined,PlaylistPlayOutlined, TrendingUp, LiveTvOutlined } from "@mui/icons-material";

import React, { useRef, useState } from "react";


export default function Sidebar() {
  return (
    <div className="sidebar">
        <h1>BIGPLAY</h1>
        <div className="wrapper">
            <section>
                <h2>MENU</h2>
                <div className="links-container">
                    <div className="link">
                        <ExploreOutlined />
                        <span>Explore</span>
                    </div>
                    <div className="link">
                        <TrendingUp />
                        <span>Trending</span>
                    </div>
                    <div className="link">
                        <StreamOutlined />
                        <span>Streaming</span>
                    </div>
                    <div className="link">
                        <PlaylistPlayOutlined />
                        <span>Playlist</span>
                    </div>
                    <div className="link">
                        <BookmarkOutlined />
                        <span>Bookmarks</span>
                    </div>
                </div>
            </section>
            <hr />
            <section>
            <h2>CATEGORY</h2>
                <div className="links-container">
                    <div className="link">
                        <LiveTvOutlined />
                        <span>Live Stream</span>
                    </div>
                    <div className="link">
                        <BookOutlined/>
                        <span>Tutorial</span>
                    </div>
                    <div className="link">
                        <GamesOutlined />
                        <span>Gaming</span>
                    </div>
                    <div className="link">
                        <SubscriptionsOutlined/>
                        <span>Subscriptions</span>
                    </div>
                    <div className="link">
                        <GroupOutlined />
                        <span>Community</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}