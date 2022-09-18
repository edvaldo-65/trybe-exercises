export const NAME_SAVED = 'NAME_SAVED'

export const nameSaved = (profile) => ({
  type: NAME_SAVED,
  payload: profile,
});
