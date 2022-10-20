import * as React from 'react';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType,
    IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import {Stack, IStackTokens} from '@fluentui/react/lib/Stack';
import {getTheme} from '@fluentui/react/lib/Styling';
import {TestImages} from '@fluentui/example-data';

const stackTokens: IStackTokens = {childrenGap: 20};
const theme = getTheme();
const {palette, fonts} = theme;

const people: IDocumentCardActivityPerson[] = [
    {name: 'Ahmed Fathy', profileImageSrc: TestImages.personaMale},
    {name: 'Ahmed Fathy', profileImageSrc: '', initials: 'AF'},
    {name: 'Aaron Reid', profileImageSrc: TestImages.personaMale},
    {name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB'},
];


const previewProps: IDocumentCardPreviewProps = {
    getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
    previewImages: [
        {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: 'EducationLaptop01.jpg',
            iconSrc: 'android-chrome-512x512.png',
            width: 144,
        },
        {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Contoso Marketing Presentation',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
    ],
};


export const CourseListItem: React.FunctionComponent = (props) => {
    return (
        <Stack tokens={stackTokens}>
            <DocumentCard
                aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
      Created by Roko Kolar a few minutes ago"
                type={DocumentCardType.compact}
                onClickHref="/home"
                style={{margin: 8}}
            >
                <DocumentCardPreview previewImages={[previewProps.previewImages[0]]}/>
                <DocumentCardDetails>
                    <DocumentCardTitle title={props.courseData.name} shouldTruncate/>
                    <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]}/>
                </DocumentCardDetails>
            </DocumentCard>
        </Stack>
    );
};

export default CourseListItem;