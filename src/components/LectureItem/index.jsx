/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { LectureItemContainer, LectureItemContainerStyles } from './styles';
import ConditionLectureItem from './ConditionLectureItem';
import { useLocation } from 'react-router';

const LectureItem = ({ classroom }) => {
  const theme = useTheme();
  const location = useLocation();
  if (classroom) {
    console.log(classroom);
  }

  return (
    classroom && (
      <LectureItemContainer css={LectureItemContainerStyles(theme)}>
        <div className="item-title">
          <div className="item-title-left">
            <p>{classroom.category}</p>
            <h1>{classroom.title}</h1>
          </div>
          <div className="item-title-right">
            <img
              src={`http://localhost:4000/${classroom.thumbUrl}`}
              alt="classThumb.png"
            />
          </div>
        </div>
        <ConditionLectureItem classroom={classroom} type={location} />
      </LectureItemContainer>
    )
  );
};

export default LectureItem;
