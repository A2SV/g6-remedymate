export type LifeStyleHabitPayload = {
	dietary_habits: {
		diet_type: string;
		meals_per_day: number;
		vegetable_intake_servings_per_day: number;
		daily_water_intake_liters: number;
	};
	physical_activity: {
		frequency_per_week: number;
		primary_type: string;
	};
	substance_use: {
		smoking_status: string;
		alcohol_consumption_per_week: string;
	};
	sleep: {
		average_duration_hours: number;
	};
	stress: {
		level: string;
	};
	occupation: string;
};
