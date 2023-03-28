import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  upload: async ({ request }) => {
    const data = await request.formData();
    const file = data.get('file');
    console.log({ file });
    if (file.name === 'undefined')
      return fail(500, { error: true, message: 'File name missing.' });
    const extensions = ['.png', '.gif', '.tiff', '.png'];
    const okFileType = extensions.reduce(
      (okType, ext) => okType || file.name.endsWith(ext),
      false
    );
    if (!okFileType)
      return fail(500, {
        error: true,
        message: 'File extension wrong. Accept ' + extensions.join(',')
      });
    return { success: true, error: false };
  }
};
