import { css } from "@emotion/react";
import Image from "next/image";

export const CoupleCard = () => {
  return (
    <div
      css={css`
        width: 100%;
        border-radius: 1rem;
        background-color: rgb(244 251 251 / 1);
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 2rem;
        padding-top: 1.75rem;
        margin: 1rem 20px 2.5rem;
        @media (min-width: 1024px) {
          border-radius: 1.5rem;
          padding-left: 50px;
          padding-right: 50px;
          padding-bottom: 2.5rem;
          padding-top: 2rem;
          margin: 1rem 0 2.5rem;
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
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/xPORzV2nOr/s-40x40_2ccc4fb7-19bd-4f02-98ef-f429c1e19085.svg"
              alt="女性"
              width={40}
              height={40}
            />
          </div>
          <div
            css={css`
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 1.25rem;
              line-height: 1.75rem;
              color: rgb(255 108 101 / 1);
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
              Rina
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
              color: rgb(10 44 47 / 1);
              @media (min-width: 1024px) {
                font-size: 1rem;
                line-height: 1.5rem;
              }
            `}
          >
            <li>年齢：27歳</li>
            <li>居住地：兵庫県</li>
            <li>職業：モデル</li>
            <li>趣味：ワイン、お笑い、ダンス、DIY</li>
          </ul>
        </div>
        <div
          css={css`
            width: 0.125rem;
            background-color: rgb(255 255 255 / 1);
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
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/xPORzV2nOr/s-40x40_dc934974-4bab-4bcf-8528-d490e3586cdb.svg"
              alt="男性"
              width={40}
              height={40}
            />
          </div>
          <div
            css={css`
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 1.25rem;
              line-height: 1.75rem;
              color: rgb(0 174 194 / 1);
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
              Shigeyasu
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
              color: rgb(10 44 47 / 1);
              @media (min-width: 1024px) {
                font-size: 1rem;
                line-height: 1.5rem;
              }
            `}
          >
            <li>年齢：27歳</li>
            <li>居住地：滋賀県</li>
            <li>職業：会社員</li>
            <li>趣味：麻雀、お笑い、フットサル</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
