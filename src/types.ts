export type Course = {
    id: string,
    ci: string,
    department: string,
    id_num: string,
    crns: Array<number>,
    required_by: {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        major: Array<any>,
        minor: Array<any>,
        hass: Array<any>
    },
    title: string,
    credits: string,
    transfer: Array<Transfer>
};

export type Transfer = {
    id: string,
    location: string,
    school: string,
    title: string
};

export type NewCourse = {
    title: string,
    department: string,
    id: string,
    credits: string,
    ci: boolean,
    description: string,
    offered: string,
    prereq: string,
    coreq: string,
    cross: string,
    sections: Array<Section>
}

export type Section = {
    crn: string,
    section: string,
    capacity: number,
    enrolled: number,
    remaining: number,
    meetings: Array<Meeting>
}

export type Meeting = {
    time: string,
    days: string,
    location: string,
    type: string,
    instructors: string
};