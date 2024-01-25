import axios from '@/lib/axiosConfig.js'
export default{

    async fetchPublishedCourses({ commit }) {
        try {
          const response = await axios.get('/no-auth/courses');
          console.log(response);
          commit('setPublishedCourses', response.data.data);
          // Vous pouvez également effectuer d'autres traitements ici si nécessaire
        } catch (error) {
          console.error(error);
          // Gestion des erreurs
        }
      },
}