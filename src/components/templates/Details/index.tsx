import Loader from "@/components/common/Loader";
import React, { useState, useEffect } from 'react';
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentsItem from "./Comments/Comments";
import CommentForm from "@/components/templates/Details/CommentForm/CommentForm";
import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import commentForm from "@/components/templates/Details/CommentForm/CommentForm";
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  const idd = router.query.id;
  const localStorageKey =  `comments_${idd}`;

  const getCommentsFromLocalStorage = (): string[] => {
    const storedComments = localStorage.getItem(localStorageKey);
    return storedComments ? JSON.parse(storedComments) : [];
  };

  const [comments, setComments] = useState([])
  useEffect(() => {
    const storedComments = getCommentsFromLocalStorage();
    setComments(storedComments);
  }, [router]);

  const setCommentsToLocalStorage = (comments: string[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(comments));
  };

  const handleCommentSubmit = (newComment: { id: number; name: string; text: string }) => {
    const existingComments = getCommentsFromLocalStorage();
    const updatedComments = [...existingComments, newComment];
    setCommentsToLocalStorage(updatedComments);
    setComments(updatedComments);
  };
  const id = router.query.id;
  if (isLoading) {
    return <Loader />;
  }
  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setCommentsToLocalStorage(updatedComments);
    setComments(updatedComments);
  };

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.Button href={filmRetrieve?.data.movie.url}>
                Download
              </Style.Button>
              <Style.Button href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.Button>
            </Style.Buttons>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>

            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Description>
        </Style.Data>
        <Style.Header>Comments ({comments.length})</Style.Header>
        {comments.length != 0 ? "": "Be first who left the comment!"}
        {comments.map((comment) => (
            <CommentsItem
                key={comment.id}
                name={comment.name}
                text={comment.text}
                id={comment.id}
                onDelete={handleDeleteComment}
            />
        ))}
        <Style.AddComment><CommentForm onCommentSubmit={handleCommentSubmit} /></Style.AddComment>
      </Style.Content>
    </Style.Details>
  );

};

export default Details;
