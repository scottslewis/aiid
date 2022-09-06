import LatestPost from 'components/blog/LatestPost';
import React from 'react';
import Card from 'elements/Card';
import { Trans } from 'react-i18next';

export default function Blog() {
  return (
    <>
      <Card className="h-full">
        <Card.Body>
          <Card.Title as="h2">
            <Trans ns="landing">Latest Blog Post</Trans>
          </Card.Title>
          <LatestPost className="mt-3" />
        </Card.Body>
      </Card>
    </>
  );
}
