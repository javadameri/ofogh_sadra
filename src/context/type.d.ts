interface UserProfile {
    user_id: number;
    nickname: string;
    firstname: string;
    lastname: string;
    avatar_url: string;
    locale: string;
    gender: string | null;
    phone: string | null;
    cell: string;
    melli_code: string;
    postal_code: string | null;
    brithdate: string;
    education: string | null;
    education_field: string | null;
    nationality: string;
    religion: string;
    channel_visit: string | null;
    officiality: string | null;
    reagent_id: number | null;
    country: string | null;
    state: string;
    city: string;
    address: string;
    description: string;
    admin_setting: string | null;
    dashboard_setting: string | null;
    others: string | null;
    sejel_id: string | null;
    sejel_serial: string | null;
}

export interface User {
    id: number;
    username: string;
    email: string;
    userProfile: UserProfile;
    wallet: number;
    logged_at: string | null;
}