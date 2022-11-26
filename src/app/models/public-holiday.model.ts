export interface PublicHolidayModel {
  readonly date: string;
  readonly localName: string;
  readonly name: string;
  readonly countryCode: string;
  readonly fixed: string;
  readonly global: boolean;
  readonly counties: string;
  readonly launchYear: string;
  readonly type: string;
}
