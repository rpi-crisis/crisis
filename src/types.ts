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