import { css } from "@emotion/react";
import Image from "next/image";
import { FC } from "react";
import FemaleSvg from "./images/female.svg";
import MaleSvg from "./images/male.svg";

const gray00 = "#0a2c2f";
const gray07 = "#f4fbfb";
const pairsBlue03 = "#00c1d4";
const red03 = "#ff6c65";
const white = "#ffffff";

export const CoupleCard: FC<{
  femaleName: string;
  femaleAge: string;
  femaleResidence: string;
  femaleJob: string;
  femaleHobby: string;
  maleName: string;
  maleAge: string;
  maleResidence: string;
  maleJob: string;
  maleHobby: string;
}> = (props) => {
  const {
    femaleName,
    femaleAge,
    femaleResidence,
    femaleJob,
    femaleHobby,
    maleName,
    maleAge,
    maleResidence,
    maleJob,
    maleHobby,
  } = props;

  return (
    <div
      css={css`
        width: 100%;
        border-radius: 1rem;
        background-color: ${gray07};
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 2rem;
        padding-top: 1.75rem;
        margin: 1rem auto 2.5rem;
        @media (min-width: 1024px) {
          border-radius: 1.5rem;
          padding-left: 50px;
          padding-right: 50px;
          padding-bottom: 2.5rem;
          padding-top: 2rem;
          margin: 1rem auto 2.5rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 1.125rem;
          @media (min-width: 1024px) {
            gap: 1.5rem;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 1 1 0%;
            flex-direction: column;
          `}
        >
          <div>
            <FemaleSvg />
          </div>
          <div
            css={css`
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 1.25rem;
              line-height: 1.75rem;
              color: ${red03};
              @media (min-width: 1024px) {
                font-size: 1.75rem;
              }
            `}
          >
            <span
              css={css`
                font-weight: 700;
              `}
            >
              {femaleName}
            </span>
            <span
              css={css`
                margin-left: 0.125rem;
                vertical-align: middle;
                font-size: 0.75rem;
                line-height: 1.375rem;
                @media (min-width: 1024px) {
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                }
              `}
            >
              さん
            </span>
          </div>
          <ul
            css={css`
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              gap: 0.125rem;
              font-size: 0.75rem;
              line-height: 1rem;
              color: ${gray00};
              @media (min-width: 1024px) {
                font-size: 1rem;
                line-height: 1.5rem;
              }
            `}
          >
            <li>年齢：{femaleAge}歳</li>
            <li>居住地：{femaleResidence}</li>
            <li>職業：{femaleJob}</li>
            <li>趣味：{femaleHobby}</li>
          </ul>
        </div>
        <div
          css={css`
            width: 0.125rem;
            background-color: ${white};
            @media (min-width: 1024px) {
              width: 0.25rem;
            }
          `}
        ></div>
        <div
          css={css`
            display: flex;
            flex: 1 1 0%;
            flex-direction: column;
          `}
        >
          <div>
            <MaleSvg />
          </div>
          <div
            css={css`
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 1.25rem;
              line-height: 1.75rem;
              color: ${pairsBlue03};
              @media (min-width: 1024px) {
                font-size: 1.75rem;
              }
            `}
          >
            <span
              css={css`
                font-weight: 700;
              `}
            >
              {maleName}
            </span>
            <span
              css={css`
                margin-left: 0.125rem;
                vertical-align: middle;
                font-size: 0.75rem;
                line-height: 1.375rem;
                @media (min-width: 1024px) {
                  font-size: 0.875rem;
                  line-height: 1.25rem;
                }
              `}
            >
              さん
            </span>
          </div>
          <ul
            css={css`
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              gap: 0.125rem;
              font-size: 0.75rem;
              line-height: 1rem;
              color: ${gray00};
              @media (min-width: 1024px) {
                font-size: 1rem;
                line-height: 1.5rem;
              }
            `}
          >
            <li>年齢：{maleAge}歳</li>
            <li>居住地：{maleResidence}</li>
            <li>職業：{maleJob}</li>
            <li>趣味：{maleHobby}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
